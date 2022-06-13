<p align="center">
  <img src="./assets/website_logo.png">
</p>

Climate Animator visualizes historical climate change data to emphasize the scale of climate impact to planet Earth. Users can use toggle buttons to view changes in arctic sea ice extent and greenhouse gas emissions over time.

Live Site: [Climate Animator](https://sodea1.github.io/climate_animator/)

* [Technologies Used](#technologies-used)
* [Wireframe](#wireframe)
* [Functionality](#functionality)
* [Implementation Timeline](#implementation-timeline)


## Technologies Used:

1. Node.js
2. D3.js
3. Canvas
4. HTML5
5. SCSS

## Arctic Ice Animation
![maps](https://user-images.githubusercontent.com/40174573/173451989-530f47e0-a149-4cc2-877a-82768166f7ab.gif)
## Greenhouse Gas Emissions Animation
![gases](https://user-images.githubusercontent.com/40174573/173451650-a8fa34ee-5f1d-46e4-b90c-941e71bbdeb8.gif)

## Implementation Timeline

1. Friday - Find reliable data sources
2. Saturday - Data conversions/formatting, d3 research
3. Sunday - arctic ice extent maps display
4. Monday - finalize maps & arctic ice animation
5. Tuesday - emissions animation
6. Wednesday - style, format & refactor

## Code Snippet

The function below takes in an amount (measured by a difference in tonnes between current year and previous year) and a year. It renders that many circles on the canvas while respecting constraints enforced by the pixelHeight, which determines the % canvas area that can be occupied by circles.

  * totalTonnes = all greenhouse gas emissions from 1750 to 2020
  * cumulativeTonnes = greenhouse gas emissions from 1750 to the current year (of the animation)
  * pixelHeight = cumulativeTonnes / totalTonnes; used to calculate y, the pixel height value constraint 

```js
const generateBubbles = (diff, yr) => {
    document.getElementById("emissions-year").innerHTML = yr;

    let cumArr = ton.slice(0, (yr - firstYr));
    let cumulativeTonnes = cumArr.reduce((acc, obj) => acc + parseInt(obj.tonnes), 0)
    const totalTonnes = Object.values(ton).reduce((sum, n) => parseInt(n.tonnes) + sum, 0);
    const percentTonnes = (cumulativeTonnes / totalTonnes); // percentage of container filled based on year
    const pixelHeight = height * percentTonnes;

    for (let i = 0; i < diff; i++) {
        let x = Math.random() * (width);
        if (x < 1) {
            x += 1;
        }

        let y = height - (Math.random() * (pixelHeight));
        if (y >= 479) {
            y -= 1;
        } else if (y <= 0) {
            y += 1;
        }
        
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = "#fe6f5e";
        ctx.fill();

    }    
}
```

## Wireframe

![alt text](./assets//wireframev3.png "wireframe")

## Functionality

1. Displays geographic arctic ice cap extent across four time periods.

2. User can toggle to view arctic ice extent by year.

3. User can 'Start' animation displaying each map chronologically.

4. User can 'Start' or 'PAUSE' animation of greenhouse gas emissions over time.

