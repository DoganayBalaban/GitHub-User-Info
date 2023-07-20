/* tanımlama */
const form = document.getElementById("text");
const btn = document.getElementById("btn");
const ul = document.getElementById("ul");
/* tanımlama */

/* event dinleyici */
btn.addEventListener("click", searchApı);
/* event dinleyici */

/* API den veri çeken ve veriyi ekrana yazdıran fonksiyon */
function searchApı() {
  const user = form.value.trim(); // Girilen kullanıcı adını al ve boşlukları kaldır
  ul.innerHTML = ""; //eski kayıdı temizle
  //arama işlemi
  if (user) {
    const api = "https://api.github.com/users/" + user; //dinamik API tanımı
    fetch(api) // API çekme
      .then((Response) => Response.json())
      .then((json) => {
        form.value = ""; //form içini sil
        /*Bir bilgiyi ekrana yazdırma işlemi */
        const id = document.createElement("li");
        id.appendChild(document.createTextNode("id: " + json.id));
        ul.appendChild(id);
        /*Bir bilgiyi ekrana yazdırma işlemi */
        const nameLi = document.createElement("li");
        nameLi.appendChild(document.createTextNode("Name: " + json.name));
        ul.appendChild(nameLi);
        const companyLi = document.createElement("li");
        companyLi.appendChild(
          document.createTextNode("Company: " + json.company)
        );
        ul.appendChild(companyLi);
        const countryLi = document.createElement("li");
        countryLi.appendChild(
          document.createTextNode("Country: " + json.location)
        );
        ul.appendChild(countryLi);
        const blogLi = document.createElement("li");
        blogLi.appendChild(document.createTextNode("Blog: " + json.blog));
        ul.appendChild(blogLi);
        const bioLi = document.createElement("li");
        bioLi.appendChild(document.createTextNode("Biografy: " + json.bio));
        ul.appendChild(bioLi);
        const repoLi = document.createElement("li");
        repoLi.appendChild(
          document.createTextNode("Repository: " + json.public_repos)
        );
        ul.appendChild(repoLi);
        const createdLi = document.createElement("li");
        createdLi.appendChild(
          document.createTextNode("Created at: " + json.created_at)
        );
        ul.appendChild(createdLi);
      })
      .catch((err) => console.log(err));
  }
}
/* tanımlama */
