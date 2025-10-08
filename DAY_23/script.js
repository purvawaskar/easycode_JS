let responce = await fetch("https://api-practice-snowy.vercel.app/songs")

console.log(responce)


async function loadData() {
   let responce = await fetch("https://api-practice-snowy.vercel.app/songs")
    let data = await responce.json()
    console.log(data)
}

loadData()


let loadData = async () => {
    let responce = await fetch("https://api.thecatapi.com/v1/images/0XYvRd7oD");
    let data = await responce.json()
    console.log(data)

}


loadData()