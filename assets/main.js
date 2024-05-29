const content = null || document.getElementById('content');

const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC_84C06EylwnG1yyTxvdfig&part=snippet%2Cid&order=date&maxResults=50';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7c94fccd19msh3d5a3ad1959beefp137a07jsnce69cb442853',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};


async function fetchData(urlApi, options){
    
        const response = await fetch(urlApi, options);
        const data = await response.json();
        return data;
    
}

//SE EJECUTA POR DEFECTO CUANDO SE CARGA EL ARCHIVO, FUNCION ANONIMA
(async () => {
    try{
        const videos = await fetchData(url, options);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
                </h3>
            </div>
            </div>
        `).slice(0,4).join('')}
        `;

        content.innerHTML = view;
    }catch (error){
        console.log(error);
    }
})();