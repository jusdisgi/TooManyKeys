module.exports = {
  params: {
    designator: 'MCU',
    side: 'F',
    P1: { type: 'net', value: 'P0.02' },
    P2: { type: 'net', value: 'P0.03' },
    P3: { type: 'net', value: 'P0.28' },
    P4: { type: 'net', value: 'P0.29' },
    P5: { type: 'net', value: 'P0.04' },
    P6: { type: 'net', value: 'P0.05' },
    P7: { type: 'net', value: 'P1.11' },
    P8: { type: 'net', value: 'P1.12' },
    P9: { type: 'net', value: 'P1.13' },
    P10: { type: 'net', value: 'P1.14' },
    P11: { type: 'net', value: 'P1.15' },
    P12: { type: 'net', value: '3V3' },
    P13: { type: 'net', value: 'GND' },
    P14: { type: 'net', value: '5V' },
    P15: { type: 'net', value: 'P0.15' },
    P16: { type: 'net', value: 'P0.19' },
    P17: { type: 'net', value: 'P1.01' },
    P18: { type: 'net', value: 'P0.09' },
    P19: { type: 'net', value: 'P0.10' },
    P20: { type: 'net', value: 'P0.31' },
    P21: { type: 'net', value: 'P1.03' },
    P22: { type: 'net', value: 'P1.05' },
    P23: { type: 'net', value: 'P1.07' },
    P24: { type: 'net', value: 'DIO' },
    P25: { type: 'net', value: 'CLK' },
    P26: { type: 'net', value: 'RST' },
    P27: { type: 'net', value: 'GND' },
    P32: { type: 'net', value: 'BAT+' },
    P33: { type: 'net', value: 'BAT-' },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "XIAO-nRF52840-Plus-SMD"`);
fp.push(p.at);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr smd)`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "1" smd roundrect (at ${(flip ? -7.62 : 7.62)} -8.255 ${(p.r + 90) % 360}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P1})`);
fp.push(`(pad "2" smd roundrect (at ${(flip ? -5.08 : 5.08)} -8.255 ${(p.r + 90) % 360}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P2})`);
fp.push(`(pad "3" smd roundrect (at ${(flip ? -2.54 : 2.54)} -8.255 ${(p.r + 90) % 360}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P3})`);
fp.push(`(pad "4" smd roundrect (at 0 -8.255 ${(p.r + 90) % 360}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P4})`);
fp.push(`(pad "5" smd roundrect (at ${(flip ? 2.54 : -2.54)} -8.255 ${(p.r + 90) % 360}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P5})`);
fp.push(`(pad "6" smd roundrect (at ${(flip ? 5.08 : -5.08)} -8.255 ${(p.r + 90) % 360}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P6})`);
fp.push(`(pad "7" smd roundrect (at ${(flip ? 7.62 : -7.62)} -8.255 ${(p.r + 90) % 360}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P7})`);
fp.push(`(pad "8" smd roundrect (at ${(flip ? 7.62 : -7.62)} 8.255 ${(p.r + 270) % 360}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P8})`);
fp.push(`(pad "9" smd roundrect (at ${(flip ? 5.08 : -5.08)} 8.255 ${(p.r + 270) % 360}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P9})`);
fp.push(`(pad "10" smd roundrect (at ${(flip ? 2.54 : -2.54)} 8.255 ${(p.r + 270) % 360}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P10})`);
fp.push(`(pad "11" smd roundrect (at 0 8.255 ${(p.r + 270) % 360}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P11})`);
fp.push(`(pad "12" smd roundrect (at ${(flip ? -2.54 : 2.54)} 8.255 ${(p.r + 270) % 360}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P12})`);
fp.push(`(pad "13" smd roundrect (at ${(flip ? -5.08 : 5.08)} 8.255 ${(p.r + 270) % 360}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P13})`);
fp.push(`(pad "14" smd roundrect (at ${(flip ? -7.62 : 7.62)} 8.255 ${(p.r + 270) % 360}) (size 2.032 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P14})`);
fp.push(`(pad "15" smd roundrect (at ${(flip ? -6.35 : 6.35)} -8.655 ${(p.r + 90) % 360}) (size 1.232 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45)  ${p.P15})`);
fp.push(`(pad "16" smd roundrect (at ${(flip ? -3.81 : 3.81)} -8.655 ${(p.r + 90) % 360}) (size 1.232 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45)  ${p.P16})`);
fp.push(`(pad "17" smd roundrect (at ${(flip ? -1.27 : 1.27)} -8.655 ${(p.r + 90) % 360}) (size 1.232 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45)  ${p.P17})`);
fp.push(`(pad "18" smd roundrect (at ${(flip ? 1.27 : -1.27)} -8.655 ${(p.r + 90) % 360}) (size 1.232 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45)  ${p.P18})`);
fp.push(`(pad "19" smd roundrect (at ${(flip ? 3.81 : -3.81)} -8.655 ${(p.r + 90) % 360}) (size 1.232 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45)  ${p.P19})`);
fp.push(`(pad "20" smd roundrect (at ${(flip ? 6.35 : -6.35)} -8.655 ${(p.r + 90) % 360}) (size 1.232 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45)  ${p.P20})`);
fp.push(`(pad "21" smd roundrect (at ${(flip ? 6.35 : -6.35)} 8.655 ${(p.r + 270) % 360}) (size 1.232 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45)  ${p.P21})`);
fp.push(`(pad "22" smd roundrect (at ${(flip ? 3.81 : -3.81)} 8.655 ${(p.r + 270) % 360}) (size 1.232 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45)  ${p.P22})`);
fp.push(`(pad "23" smd roundrect (at ${(flip ? 1.27 : -1.27)} 8.655 ${(p.r + 270) % 360}) (size 1.232 0.95) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (chamfer_ratio 0.35) (chamfer top_left bottom_left) (thermal_bridge_angle 45)  ${p.P23})`);
fp.push(`(pad "24" smd circle (at ${(flip ? -8.5725 : 8.5725)} -1.27 ${(p.r + 270) % 360}) (size 1.7 1.7) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P24})`);
fp.push(`(pad "25" smd circle (at ${(flip ? -8.5725 : 8.5725)} 1.27 ${(p.r + 270) % 360}) (size 1.7 1.7) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P25})`);
fp.push(`(pad "26" smd circle (at ${(flip ? -6.0325 : 6.0325)} -1.27 ${(p.r + 270) % 360}) (size 1.7 1.7) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P26})`);
fp.push(`(pad "27" smd circle (at ${(flip ? -6.0325 : 6.0325)} 1.27 ${(p.r + 270) % 360}) (size 1.7 1.7) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P27})`);
fp.push(`(pad "32" smd roundrect (at ${(flip ? 5.517823 : -5.517823)} -0.993988 ${(p.r + 180) % 360}) (size 2.5 1.1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P32})`);
fp.push(`(pad "33" smd roundrect (at ${(flip ? 5.517823 : -5.517823)} 1.006012 ${(p.r + 180) % 360}) (size 2.5 1.1) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (roundrect_rratio 0.1) (thermal_bridge_angle 45)  ${p.P33})`);

// Drawings on User.1
fp.push(`(fp_line (start ${(flip ? 10.414 : -10.414)} -6.985) (end ${(flip ? 10.414 : -10.414)} 6.985) (stroke (width 0.0254) (type solid)) (layer "User.1") )`);
fp.push(`(fp_line (start ${(flip ? 8.509 : -8.509)} -8.89) (end ${(flip ? -8.636 : 8.636)} -8.89) (stroke (width 0.0254) (type solid)) (layer "User.1") )`);
fp.push(`(fp_line (start ${(flip ? 8.509 : -8.509)} 8.89) (end ${(flip ? -8.636 : 8.636)} 8.89) (stroke (width 0.0254) (type solid)) (layer "User.1") )`);
fp.push(`(fp_line (start ${(flip ? -10.541 : 10.541)} 6.985) (end ${(flip ? -10.541 : 10.541)} -6.985) (stroke (width 0.0254) (type solid)) (layer "User.1") )`);
fp.push(`(fp_rect (start ${(flip ? -5.715 : 5.715)} -3.81) (end ${(flip ? -12.065 : 12.065)} 3.81) (stroke (width 0.0762) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_arc (start ${(flip ? 10.414 : -10.414)} -6.985) (mid ${(flip ? 9.856038 : -9.856038)} -8.332038) (end ${(flip ? 8.509 : -8.509)} -8.89) (stroke (width 0.0254) (type solid)) (layer "User.1") )`);
fp.push(`(fp_arc (start ${(flip ? 8.509 : -8.509)} 8.89) (mid ${(flip ? 9.856038 : -9.856038)} 8.332038) (end ${(flip ? 10.414 : -10.414)} 6.985) (stroke (width 0.0254) (type solid)) (layer "User.1") )`);
fp.push(`(fp_arc (start ${(flip ? -8.636 : 8.636)} -8.89) (mid ${(flip ? -9.983038 : 9.983038)} -8.332038) (end ${(flip ? -10.541 : 10.541)} -6.985) (stroke (width 0.0254) (type solid)) (layer "User.1") )`);
fp.push(`(fp_arc (start ${(flip ? -10.541 : 10.541)} 6.985) (mid ${(flip ? -9.983038 : 9.983038)} 8.332038) (end ${(flip ? -8.636 : 8.636)} 8.89) (stroke (width 0.0254) (type solid)) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? 7.62 : -7.62)} -8.89) (end ${(flip ? 7.493 : -7.493)} -8.89) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? 7.62 : -7.62)} -7.62) (end ${(flip ? 7.493 : -7.493)} -7.62) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? 7.62 : -7.62)} 7.62) (end ${(flip ? 7.493 : -7.493)} 7.62) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? 7.62 : -7.62)} 8.89) (end ${(flip ? 7.493 : -7.493)} 8.89) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? 5.08 : -5.08)} -8.89) (end ${(flip ? 4.953 : -4.953)} -8.89) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? 5.08 : -5.08)} -7.62) (end ${(flip ? 4.953 : -4.953)} -7.62) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? 5.08 : -5.08)} 7.62) (end ${(flip ? 4.953 : -4.953)} 7.62) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? 5.08 : -5.08)} 8.89) (end ${(flip ? 4.953 : -4.953)} 8.89) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? 2.54 : -2.54)} -8.89) (end ${(flip ? 2.413 : -2.413)} -8.89) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? 2.54 : -2.54)} -7.62) (end ${(flip ? 2.413 : -2.413)} -7.62) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? 2.54 : -2.54)} 7.62) (end ${(flip ? 2.413 : -2.413)} 7.62) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? 2.54 : -2.54)} 8.89) (end ${(flip ? 2.413 : -2.413)} 8.89) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? -0 : 0)} -8.89) (end ${(flip ? -0.127 : 0.127)} -8.89) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? -0 : 0)} -7.62) (end ${(flip ? -0.127 : 0.127)} -7.62) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? -0 : 0)} 7.62) (end ${(flip ? -0.127 : 0.127)} 7.62) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? -0 : 0)} 8.89) (end ${(flip ? -0.127 : 0.127)} 8.89) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? -2.54 : 2.54)} -8.89) (end ${(flip ? -2.667 : 2.667)} -8.89) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? -2.54 : 2.54)} -7.62) (end ${(flip ? -2.667 : 2.667)} -7.62) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? -2.54 : 2.54)} 7.62) (end ${(flip ? -2.667 : 2.667)} 7.62) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? -2.54 : 2.54)} 8.89) (end ${(flip ? -2.667 : 2.667)} 8.89) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? -5.08 : 5.08)} -8.89) (end ${(flip ? -5.207 : 5.207)} -8.89) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? -5.08 : 5.08)} -7.62) (end ${(flip ? -5.207 : 5.207)} -7.62) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? -5.08 : 5.08)} 7.62) (end ${(flip ? -5.207 : 5.207)} 7.62) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? -5.08 : 5.08)} 8.89) (end ${(flip ? -5.207 : 5.207)} 8.89) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? -7.62 : 7.62)} -8.89) (end ${(flip ? -7.747 : 7.747)} -8.89) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? -7.62 : 7.62)} -7.62) (end ${(flip ? -7.747 : 7.747)} -7.62) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? -7.62 : 7.62)} 7.62) (end ${(flip ? -7.747 : 7.747)} 7.62) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);
fp.push(`(fp_circle (center ${(flip ? -7.62 : 7.62)} 8.89) (end ${(flip ? -7.747 : 7.747)} 8.89) (stroke (width 0.0254) (type default)) (fill no) (layer "User.1") )`);

// Drawings on F.CrtYd
fp.push(`(fp_rect (start ${(flip ? 10.4 : -10.4)} -8.9) (end ${(flip ? -10.55 : 10.55)} 8.9) (stroke (width 0.05) (type default)) (fill no) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);

// Drawings on F.Fab
fp.push(`(fp_rect (start ${(flip ? 10.4 : -10.4)} -8.9) (end ${(flip ? -10.55 : 10.55)} 8.9) (stroke (width 0.1) (type default)) (fill no) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);

// Drawings on F.SilkS
fp.push(`(fp_line (start ${(flip ? 10.414 : -10.414)} -6.985) (end ${(flip ? 10.414 : -10.414)} 6.985) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 8.509 : -8.509)} -8.89) (end ${(flip ? -8.636 : 8.636)} -8.89) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 8.509 : -8.509)} 8.89) (end ${(flip ? -8.636 : 8.636)} 8.89) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -10.541 : 10.541)} -4.495) (end ${(flip ? -11.551272 : 11.551272)} -4.491272) (stroke (width 0.127) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -10.541 : 10.541)} 6.985) (end ${(flip ? -10.541 : 10.541)} -6.985) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -11.551 : 11.551)} 4.504) (end ${(flip ? -10.541 : 10.541)} 4.504) (stroke (width 0.127) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -12.051 : 12.051)} -3.991272) (end ${(flip ? -12.051 : 12.051)} 4.004) (stroke (width 0.127) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start ${(flip ? 10.414 : -10.414)} -6.985) (mid ${(flip ? 9.856038 : -9.856038)} -8.332038) (end ${(flip ? 8.509 : -8.509)} -8.89) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start ${(flip ? 8.509 : -8.509)} 8.89) (mid ${(flip ? 9.856038 : -9.856038)} 8.332038) (end ${(flip ? 10.414 : -10.414)} 6.985) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start ${(flip ? -8.64 : 8.64)} -8.89) (mid ${(flip ? -9.987038 : 9.987038)} -8.332038) (end ${(flip ? -10.545 : 10.545)} -6.985) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start ${(flip ? -10.541 : 10.541)} 6.985) (mid ${(flip ? -9.983024 : 9.983024)} 8.332024) (end ${(flip ? -8.636 : 8.636)} 8.89) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start ${(flip ? -11.551272 : 11.551272)} -4.491272) (mid ${(flip ? -11.904644 : 11.904644)} -4.344724) (end ${(flip ? -12.051 : 12.051)} -3.991272) (stroke (width 0.127) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_arc (start ${(flip ? -12.051 : 12.051)} 4.004) (mid ${(flip ? -11.904524 : 11.904524)} 4.357524) (end ${(flip ? -11.551 : 11.551)} 4.504) (stroke (width 0.127) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_circle (center ${(flip ? -9.408 : 9.408)} -7.826) (end ${(flip ? -9.662 : 9.662)} -7.826) (stroke (width 0.5) (type solid)) (fill yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_circle (center ${(flip ? -10.125 : 10.125)} -9.1) (end ${(flip ? -10.379 : 10.379)} -9.1) (stroke (width 0.5) (type solid)) (fill yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// 3D Models
fp.push(`(model "\${AMZPATH}/3dmodels/AMz3D.3dshapes/XIAO-nRF52840 v15.step" (hide yes) (offset (xyz -1.778 -6.096 0.381)) (scale (xyz 1 1 1)) (rotate (xyz -90 0 0)))`);
fp.push(`(model "\${AMZPATH}/3dmodels/AMz3D.3dshapes/Seeeduino XIAO SAMD21 v4.step" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))`);
fp.push(`(model "\${AMZPATH}/3dmodels/AMz3D.3dshapes/Seeed Studio XIAO RP2040 v26.step" (hide yes) (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 90)))`);
fp.push(`(model "\${AMZPATH}/3dmodels/AMz3D.3dshapes/Seeed Studio XIAO-ESP32-C3.step" (hide yes) (offset (xyz -1.7018 -6.096 0)) (scale (xyz 1 1 1)) (rotate (xyz -90 0 0)))`);
fp.push(`(model "\${AMZPATH}/3dmodels/AMz3D.3dshapes/XIAO-ESP32S3 v2.step" (hide yes) (offset (xyz -1.778 -6.1722 0)) (scale (xyz 1 1 1)) (rotate (xyz -90 0 0)))`);

// Properties
// fp.push(`(property "Reference" "REF**" (at ${(flip ? -11.225 : 11.225)} -0.075 ${(p.r + 270) % 360}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 0.635 0.635) (thickness 0.1016)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "XIAO-nRF52840-Plus-SMD" (at 0 0 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 0.635 0.635) (thickness 0.1016)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 0 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 0 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(')');
    return fp.join('\n');
  }
}

