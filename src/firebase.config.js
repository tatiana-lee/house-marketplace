import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyAAbhgREasRPNSg8OC4968v1zovZ3sacEs',
	authDomain: 'house-marketplace-app-f3652.firebaseapp.com',
	projectId: 'house-marketplace-app-f3652',
	storageBucket: 'house-marketplace-app-f3652.appspot.com',
	messagingSenderId: '767075284607',
	appId: '1:767075284607:web:dc425e14eff01e7dd3314a',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore()
