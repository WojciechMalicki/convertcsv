

var results = "";

String.prototype.escapeDiacritics = function() {
  return this.replace(/ą/g, "a")
    .replace(/Ą/g, "A")
    .replace(/ć/g, "c")
    .replace(/Ć/g, "C")
    .replace(/ę/g, "e")
    .replace(/Ę/g, "E")
    .replace(/ł/g, "l")
    .replace(/Ł/g, "L")
    .replace(/ń/g, "n")
    .replace(/Ń/g, "N")
    .replace(/ó/g, "o")
    .replace(/Ó/g, "O")
    .replace(/ś/g, "s")
    .replace(/Ś/g, "S")
    .replace(/ż/g, "z")
    .replace(/Ż/g, "Z")
    .replace(/ź/g, "z")
    .replace(/Ź/g, "Z");
};

function addDate(line) {
  var name = line.split(",");
  var domena = document.getElementById("domena").value;
  if (domena[0] != "@") {
    domena = "@" + domena;
  }
  name[0] = name[0].trim();
  name[0] = name[0].replace(" ","");
  name[1] = name[1].trim();
  name[1] = name[1].replace(" ","");
  var username = name[0] + name[1] + domena;
  username = username.escapeDiacritics();
  username = username.replace("-", "");
  results =
    results +
    username.toLowerCase() +
    "," +
    name[0] +
    "," +
    name[1] +
    "," +
    name[0] +
    " " +
    name[1] +
    ",,,,,,,,,,,\n";
}

function dconvert() {
  results =
    "Nazwa użytkownika,Imię,Nazwisko,Nazwa wyświetlana,Stanowisko,Dział,Numer biura,Telefon w biurze,Telefon komórkowy,Numer faksu,Adres,Miejscowość,Województwo,Kod pocztowy,Kraj lub region\n";
  var date = document.getElementById("dateinput").value.split("\n");
  date.forEach(addDate);
  document.getElementById("dateoutput").innerHTML = results;
}

function dpaste() {
  var date = document.getElementById("dateinput");
  date.select();
  document.execCommand("paste");
}

function dcopy() {
  var csvdate = document.getElementById("dateoutput");
  csvdate.select();
  document.execCommand("copy");
}
