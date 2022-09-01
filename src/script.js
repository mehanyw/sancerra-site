function carouselTimeOut(item)
{
    setTimeout(() => {
        item = item === 3 ? 1 : item + 1;

        // Again
        carouselTimeOut(item);

        // Every 6 sec
    }, 10000);
}