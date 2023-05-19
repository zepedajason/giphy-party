console.log("Let's get this party started!");


const $gifContainer = $("#gif-container")
const form = $("form");
const $input = $("#gifInput");

async function makeGif(res){
    //const searchInput = "funny";
    
    let i = Math.floor(Math.random() * res.data.data.length);
    console.log(res.data.data[i].images.original.url);
    let gif = (`<img src="${res.data.data[i].images.original.url}">` );
    //console.log(gif);
    $gifContainer.append(gif);
    }

$("#removebtn").on("click", function(){
    $gifContainer.empty();
})

$("form").on("submit", async (e) => {
    e.preventDefault();
    let input = $input.val();
    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: input,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    $input.val("");
    
    makeGif(res);
})
