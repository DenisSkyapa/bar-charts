document.addEventListener("DOMContentLoaded", function () {

    var arr = [5, 8, 2, 1, 15, 2, 3, 5, 9, 11, 10, 4, 3, 14, 1, 7, 10, 3, 2, 13];
    barChartBuilder(arr, 30, 30);

    function barChartBuilder(arr, height, width) {
        let container = document.getElementsByClassName("graph-container")[0];
        let rowsCount = Math.max(...arr);
        let colsCount = arr.length;
        for (let i = 0; i <= rowsCount; i++) {
            let lineY = document.createElement("span");
            lineY.className = "y-axis";
            lineY.style.bottom = i * height + "px";
            lineY.innerHTML = i;
            container.appendChild(lineY);
        }

        for (let i = 1; i <= colsCount; i++) {
            let lineX = document.createElement("span");
            lineX.className = "x-axis";
            lineX.style.left = ((i * width) - 5) + "px";
            lineX.innerHTML = i;
            container.appendChild(lineX);
            let column = document.createElement("div");
            column.className = "column";
            column.style.width = width + "px";
            column.style.height = (height * arr[i - 1]) + "px";
            if (arr[i - 1] >= 6 && arr[i - 1] <= 10) {
                column.style.backgroundColor = "yellow";
            } else if (arr[i - 1] > 10) {
                column.style.backgroundColor = "red";
            } else
                column.style.backgroundColor = "green";
            container.appendChild(column);
        }
    }

});