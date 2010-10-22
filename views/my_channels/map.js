function(doc) {
  if (doc.type == "channel" && doc.channel && doc.author) {
    emit(doc.author.name, doc);
  }
};
