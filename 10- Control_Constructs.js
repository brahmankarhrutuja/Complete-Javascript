// if 
// if else
// if else if
// if else ladder

/*
12, 1,2 - "Winter"
3,4,5,6- "Summer"
7,8 - "Monsoon"
9,10,11 - "Spring"
*/

month = 5
Switch (month) {
    case 12 :
    case 1:
    case 2:
        console.log("Winter");
        break;
    
    case 3: 
    case 4:
    case 5:
    case 6:
        console.log("Summer");
        break;

    case 7:
    case 8:
        console.log("Monsoon");
        break;

    case 9:
    case 10:
    case 11:
        console.log("Spring");
        break;

        default:
            console.log("Invalid input!");
}