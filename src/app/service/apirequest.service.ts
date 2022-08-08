import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore'
import { Club } from '../main';

@Injectable({
  providedIn: 'root'
})
export class ApirequestService {

  constructor(
    private afs: AngularFirestore
  ) { }


  getCollection(): AngularFirestoreCollection<Club> {
    return this.afs.collection<Club>('club', ref => ref
      // .where('rate', '>=', 3)
      // .limit(10)
      .orderBy('rate')
    )
  }

  getDocument(id: String): AngularFirestoreDocument<Club> {
    return this.afs.doc<Club>('club/' + id)
  }


}
