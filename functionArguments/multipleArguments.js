const paintwall = function(item) {
    console.log = "The north_wall has been painted " + item;
    console.log = "The south_east_wall has beem painted " + item;
};
const north_wall = "orange";
const south_east_wall = "grey";

paintwall(north_wall);
paintwall(south_east_wall);