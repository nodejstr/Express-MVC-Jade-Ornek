function urun(data, id) {
    this.id = id;
    this.adi = String(data.adi) || "Tanımlanmamış";
    this.kategoriler = (data.kategoriler || []).map(function(c, index) {
        return { id: Number(c.id) || index, kategoriAdi: String(c.kategoriAdi) };
    });
}
module.exports = urun;