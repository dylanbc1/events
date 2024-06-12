db.createCollection("comentarios", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "comentarios",
      required: ["_id", "texto", "evento", "persona"],
      properties: {
        "_id": { bsonType: "objectId" },
        "texto": { bsonType: "string" },
        "evento": { bsonType: "objectId" },
        "persona": { bsonType: "objectId" },
      },
    },
  },
});

db.createCollection("eventos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "eventos",
      required: ["_id", "titulo", "descripcion", "categorias", "fecha", "lugar", "facultades_organizadoras"],
      properties: {
        "_id": { bsonType: "objectId" },
        "titulo": { bsonType: "string" },
        "descripcion": { bsonType: "string" },
        "categorias": { bsonType: "array", items: { bsonType: "array" } },
        "fecha": { bsonType: "timestamp" },
        "lugar": { bsonType: "object", title: "lugar", properties: { "nombre": { bsonType: "string" }, "direccion": { bsonType: "string" }, "ciudad": { bsonType: "object", title: "ciudad", properties: { "nombre": { bsonType: "string" }, "departamento": { bsonType: "string" }, "pais": { bsonType: "string" }, }, }, }, },
        "asistentes": { bsonType: "array", items: { bsonType: "array" } },
        "conferencistas": { bsonType: "array", items: { bsonType: "array" } },
        "facultades_organizadoras": { bsonType: "array", items: { bsonType: "array" } },
      },
    },
  },
});

db.createCollection("personas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      title: "personas",
      required: ["_id", "nombre_usuario", "nombre_completo", "tipo_relacion", "email", "ciudad", "es_empleado"],
      properties: {
        "_id": { bsonType: "objectId" },
        "nombre_usuario": { bsonType: "string" },
        "nombre_completo": { bsonType: "string" },
        "tipo_relacion": { bsonType: "string" },
        "email": { bsonType: "string" },
        "ciudad": { bsonType: "object", title: "ciudad", properties: { "nombre": { bsonType: "string" }, "departamento": { bsonType: "string" }, "pais": { bsonType: "string" }, }, },
        "es_empleado": { bsonType: "bool" },
      },
    },
  },
});