(function (window, document, undefined) {

// code that should be taken care of right away

    window.onload = init;

    function init() {
        // the code to be called when the dom has loaded
        // #document has its nodes
        const walking_count = document.getElementById('walking_count');
        const lucky_count = document.getElementById('lucky_count');
        const sphere_count = document.getElementById('sphere_count');
        walking_count.addEventListener('change', function () {
            document.getElementById("res_walking_100").value = 2 * this.value * 100;
            document.getElementById("res_sphere").value = Math.trunc(lucky_count.value / 2 / this.value);
        });

        lucky_count.addEventListener('change', function () {
            document.getElementById("res_sphere").value = Math.trunc(this.value / 2 / walking_count.value);
        });

        sphere_count.addEventListener('change', function () {
            document.getElementById("res_lucky").value = Math.ceil(this.value * walking_count.value * 2 /10);
        });
    }

})(window, document, undefined);