function _bottom_case_walls_extrude_6_outline_fn(){
    return new CSG.Path2D([[162.4763269,-181.4042636],[162.4763269,-108.0220229]]).appendArc([162.9763269,-107.5220229],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([185.1263269,-107.5220229]).appendArc([185.6263269,-108.0220229],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([185.6263269,-169.5871681]).appendArc([185.3763269,-170.0201808],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([164.669655,-181.9751834]).appendPoint([164.2543033,-181.7055908]).appendArc([163.8251366,-181.6502613],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([163.1332734,-181.8789928]).appendArc([162.4763269,-181.4042636],{"radius":0.5,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[163.4763269,-180.7819899],[163.4763269,-108.5220229]]).appendPoint([184.6263269,-108.5220229]).appendPoint([184.6263269,-169.298493]).appendPoint([164.5063269,-180.9147804]).appendPoint([164.5063269,-180.187319]).appendPoint([163.4763269,-180.7819899]).close().innerToCAG()
).extrude({ offset: [0, 0, 6] });
}


function _mcu_wall_cutout_extrude_2_2_outline_fn(){
    return new CSG.Path2D([[170.1473269,-136.5570229],[178.1473269,-136.5570229]]).appendPoint([178.1473269,-94.1570229]).appendPoint([170.1473269,-94.1570229]).appendPoint([170.1473269,-136.5570229]).close().innerToCAG()
.extrude({ offset: [0, 0, 2.2] });
}


function _bottom_case_outer_outline_extrude_1_outline_fn(){
    return new CSG.Path2D([[162.4763269,-181.4042636],[162.4763269,-108.0220229]]).appendArc([162.9763269,-107.5220229],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([185.1263269,-107.5220229]).appendArc([185.6263269,-108.0220229],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([185.6263269,-169.5871681]).appendArc([185.3763269,-170.0201808],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([164.669655,-181.9751834]).appendPoint([164.2543033,-181.7055908]).appendArc([163.8251366,-181.6502613],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([163.1332734,-181.8789928]).appendArc([162.4763269,-181.4042636],{"radius":0.5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function _screws_extrude_1_outline_fn(){
    return CAG.circle({"center":[168.1773323,-194.9169411],"radius":1.1})
.union(
    CAG.circle({"center":[116.5933268,-180.8570229],"radius":1.1})
).union(
    CAG.circle({"center":[164.0933269,-86.8570229],"radius":1.1})
).union(
    CAG.circle({"center":[69.8941715,-167.6612351],"radius":1.1})
).union(
    CAG.circle({"center":[45.884336,-94.324677],"radius":1.1})
).extrude({ offset: [0, 0, 1] });
}




                function toomanykeys_bottom_tray_case_fn() {
                    

                // creating part 0 of case toomanykeys_bottom_tray
                let toomanykeys_bottom_tray__part_0 = _bottom_case_walls_extrude_6_outline_fn();

                // make sure that rotations are relative
                let toomanykeys_bottom_tray__part_0_bounds = toomanykeys_bottom_tray__part_0.getBounds();
                let toomanykeys_bottom_tray__part_0_x = toomanykeys_bottom_tray__part_0_bounds[0].x + (toomanykeys_bottom_tray__part_0_bounds[1].x - toomanykeys_bottom_tray__part_0_bounds[0].x) / 2
                let toomanykeys_bottom_tray__part_0_y = toomanykeys_bottom_tray__part_0_bounds[0].y + (toomanykeys_bottom_tray__part_0_bounds[1].y - toomanykeys_bottom_tray__part_0_bounds[0].y) / 2
                toomanykeys_bottom_tray__part_0 = translate([-toomanykeys_bottom_tray__part_0_x, -toomanykeys_bottom_tray__part_0_y, 0], toomanykeys_bottom_tray__part_0);
                toomanykeys_bottom_tray__part_0 = rotate([0,0,0], toomanykeys_bottom_tray__part_0);
                toomanykeys_bottom_tray__part_0 = translate([toomanykeys_bottom_tray__part_0_x, toomanykeys_bottom_tray__part_0_y, 0], toomanykeys_bottom_tray__part_0);

                toomanykeys_bottom_tray__part_0 = translate([-75,0,0], toomanykeys_bottom_tray__part_0);
                let result = toomanykeys_bottom_tray__part_0;
                
            

                // creating part 1 of case toomanykeys_bottom_tray
                let toomanykeys_bottom_tray__part_1 = _mcu_wall_cutout_extrude_2_2_outline_fn();

                // make sure that rotations are relative
                let toomanykeys_bottom_tray__part_1_bounds = toomanykeys_bottom_tray__part_1.getBounds();
                let toomanykeys_bottom_tray__part_1_x = toomanykeys_bottom_tray__part_1_bounds[0].x + (toomanykeys_bottom_tray__part_1_bounds[1].x - toomanykeys_bottom_tray__part_1_bounds[0].x) / 2
                let toomanykeys_bottom_tray__part_1_y = toomanykeys_bottom_tray__part_1_bounds[0].y + (toomanykeys_bottom_tray__part_1_bounds[1].y - toomanykeys_bottom_tray__part_1_bounds[0].y) / 2
                toomanykeys_bottom_tray__part_1 = translate([-toomanykeys_bottom_tray__part_1_x, -toomanykeys_bottom_tray__part_1_y, 0], toomanykeys_bottom_tray__part_1);
                toomanykeys_bottom_tray__part_1 = rotate([0,0,0], toomanykeys_bottom_tray__part_1);
                toomanykeys_bottom_tray__part_1 = translate([toomanykeys_bottom_tray__part_1_x, toomanykeys_bottom_tray__part_1_y, 0], toomanykeys_bottom_tray__part_1);

                toomanykeys_bottom_tray__part_1 = translate([-75,0,1], toomanykeys_bottom_tray__part_1);
                result = result.subtract(toomanykeys_bottom_tray__part_1);
                
            

                // creating part 2 of case toomanykeys_bottom_tray
                let toomanykeys_bottom_tray__part_2 = _bottom_case_outer_outline_extrude_1_outline_fn();

                // make sure that rotations are relative
                let toomanykeys_bottom_tray__part_2_bounds = toomanykeys_bottom_tray__part_2.getBounds();
                let toomanykeys_bottom_tray__part_2_x = toomanykeys_bottom_tray__part_2_bounds[0].x + (toomanykeys_bottom_tray__part_2_bounds[1].x - toomanykeys_bottom_tray__part_2_bounds[0].x) / 2
                let toomanykeys_bottom_tray__part_2_y = toomanykeys_bottom_tray__part_2_bounds[0].y + (toomanykeys_bottom_tray__part_2_bounds[1].y - toomanykeys_bottom_tray__part_2_bounds[0].y) / 2
                toomanykeys_bottom_tray__part_2 = translate([-toomanykeys_bottom_tray__part_2_x, -toomanykeys_bottom_tray__part_2_y, 0], toomanykeys_bottom_tray__part_2);
                toomanykeys_bottom_tray__part_2 = rotate([0,0,0], toomanykeys_bottom_tray__part_2);
                toomanykeys_bottom_tray__part_2 = translate([toomanykeys_bottom_tray__part_2_x, toomanykeys_bottom_tray__part_2_y, 0], toomanykeys_bottom_tray__part_2);

                toomanykeys_bottom_tray__part_2 = translate([-75,0,0], toomanykeys_bottom_tray__part_2);
                result = result.union(toomanykeys_bottom_tray__part_2);
                
            

                // creating part 3 of case toomanykeys_bottom_tray
                let toomanykeys_bottom_tray__part_3 = _screws_extrude_1_outline_fn();

                // make sure that rotations are relative
                let toomanykeys_bottom_tray__part_3_bounds = toomanykeys_bottom_tray__part_3.getBounds();
                let toomanykeys_bottom_tray__part_3_x = toomanykeys_bottom_tray__part_3_bounds[0].x + (toomanykeys_bottom_tray__part_3_bounds[1].x - toomanykeys_bottom_tray__part_3_bounds[0].x) / 2
                let toomanykeys_bottom_tray__part_3_y = toomanykeys_bottom_tray__part_3_bounds[0].y + (toomanykeys_bottom_tray__part_3_bounds[1].y - toomanykeys_bottom_tray__part_3_bounds[0].y) / 2
                toomanykeys_bottom_tray__part_3 = translate([-toomanykeys_bottom_tray__part_3_x, -toomanykeys_bottom_tray__part_3_y, 0], toomanykeys_bottom_tray__part_3);
                toomanykeys_bottom_tray__part_3 = rotate([0,0,0], toomanykeys_bottom_tray__part_3);
                toomanykeys_bottom_tray__part_3 = translate([toomanykeys_bottom_tray__part_3_x, toomanykeys_bottom_tray__part_3_y, 0], toomanykeys_bottom_tray__part_3);

                toomanykeys_bottom_tray__part_3 = translate([-75,0,0], toomanykeys_bottom_tray__part_3);
                result = result.subtract(toomanykeys_bottom_tray__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return toomanykeys_bottom_tray_case_fn();
            }

        