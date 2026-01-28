# 🛍️ BECOME — Boutique Firebase

## 🎯 Objectif du projet

Créer une boutique web avec :
- un **espace admin** pour ajouter des produits
- une **vitrine publique** (index.html) qui affiche les produits
- une **gestion d’images** via Firebase Storage
- une **base de données produits** via Firestore
- une **sécurité par authentification Firebase**

---

## 🧱 Architecture globale

admin.product.html
   │
   ├── Upload image → Firebase Storage
   │        │
   │        └── URL image
   │
   └── Enregistrement produit → Firestore (collection `products`)
                                  │
                                  ▼
                           index.html (vitrine publique)

---

## 🔐 Authentification (Firebase Auth)

- Firebase Auth est utilisé pour :
  - protéger l’accès aux pages admin
  - identifier l’utilisateur qui publie un produit

### Logique
- `onAuthStateChanged(auth, user => { ... })`
- Si `user === null` → redirection vers `login.html`
- Sinon → accès autorisé

---

## 📦 Base de données — Firestore

### Collection : `products`

Chaque produit enregistré contient :

```json
{
  "title": "Nom du produit",
  "description": "Description",
  "price": 120000,
  "stock": 5,
  "imageUrl": "https://firebasestorage....",
  "active": true,
  "author": "UID utilisateur",
  "createdAt": Timestamp
}
