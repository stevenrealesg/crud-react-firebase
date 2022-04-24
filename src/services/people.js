import { firebase } from '../config/firebase'

const getList = async () => {
    try {
        const db = firebase.firestore()
        const res = await db.collection('people').get()
        const data = res.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        return data
    } catch (error) {
        console.log("Error al obtener las personas", error)
    }
}

const save = async (person) => {
    try {
        const db = firebase.firestore()
        await db.collection('people').add(person)
        return true
    } catch (error) {
        console.log("Error guardar persona", error)
    }
}

export { getList, save }