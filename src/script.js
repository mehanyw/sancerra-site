function carouselTimeOut(item)
{
    setTimeout(() => {
        console.log(item);
        item = item === 3 ? 1 : item + 1;

        // Again
        carouselTimeOut(item);

        // Every 3 sec
    }, 3000);
}