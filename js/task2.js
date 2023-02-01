const pictureBlock = document.querySelector('.pictures')

const postsFragment = new DocumentFragment();



function createPhoto(data){
    const pictureContainer = document.getElementById('picture');
    const pictureNode = pictureContainer.content.cloneNode(true);

    pictureNode.querySelector('.picture__img').src = data.url;
    pictureNode.querySelector('.picture__comments').innerText = data.comment.length;
    pictureNode.querySelector('.picture__likes').innerText = data.likes;  
    postsFragment.append(pictureNode)
}

export function addPhoto(array) {
    array.forEach((data) => createPhoto(data));
    pictureBlock.append(postsFragment)
}

