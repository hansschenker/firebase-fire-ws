import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
// firestore
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable()
export class FirestoreApiService {
  constructor(private afs: AngularFirestore) {}
  // get a collection observable with optional query
  collection$(path: string, query?) {
    return this.afs
      .collection(path, query)
      .snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data: Object = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }
  // get a document
  doc$(path: string): Observable<any> {
    return this.afs
      .doc<Object>(path)
      .snapshotChanges()
      .pipe(
        map(doc => {
          return { id: doc.payload.id, ...doc.payload.data() };
        })
      );
  }

  updateAt(path: string, data: Object): Promise<any> {
    const segments = path.split("/").filter(v => v);
    if (segments.length % 2) {
      // Odd is always a collection
      return this.afs.collection(path).add(data);
    } else {
      // Even is always document, merge data with doc
      return this.afs.doc(path).set(data, { merge: true });
    }
  }

  delete(path) {
    return this.afs.doc(path).delete();
  }
}
