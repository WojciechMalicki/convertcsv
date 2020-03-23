String.prototype.escapeDiacritics = function()
{
    return this.replace(/ą/g, 'a').replace(/Ą/g, 'A')
        .replace(/ć/g, 'c').replace(/Ć/g, 'C')
        .replace(/ę/g, 'e').replace(/Ę/g, 'E')
        .replace(/ł/g, 'l').replace(/Ł/g, 'L')
        .replace(/ń/g, 'n').replace(/Ń/g, 'N')
        .replace(/ó/g, 'o').replace(/Ó/g, 'O')
        .replace(/ś/g, 's').replace(/Ś/g, 'S')
        .replace(/ż/g, 'z').replace(/Ż/g, 'Z')
        .replace(/ź/g, 'z').replace(/Ź/g, 'Z');
}

function adddate(line)
{
  var name = line.split(",");
  var domena = document.getElementById("domena").value;
  if (domena[0] != '@')
  var username = 
}

function dconvert()
{
  var date = document.getElementById("dateinput").value.split('\n');
  var results = "Nazwa użytkownika,Imię,Nazwisko,Nazwa wyświetlana\n";
  
  
  document.getElementById("dateoutput").innerHTML = results + date[4] + date[3];
  
  
  
}

function dpaste()
{
  
}

function dcopy()
{
  
}
