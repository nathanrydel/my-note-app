migrate((db) => {
  const collection = new Collection({
    "id": "9tptnlsc0x1f3ik",
    "created": "2023-04-03 04:23:07.784Z",
    "updated": "2023-04-03 04:23:07.784Z",
    "name": "pocketbase_demo",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yrxplk82",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ejhejoag",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9tptnlsc0x1f3ik");

  return dao.deleteCollection(collection);
})
