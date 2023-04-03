migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9tptnlsc0x1f3ik")

  // remove
  collection.schema.removeField("suiqyumf")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9tptnlsc0x1f3ik")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "suiqyumf",
    "name": "field",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
