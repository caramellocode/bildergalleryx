const images = [
    "/img/Adriann_drosera_ice_hotel_aurora_borealis_gorgeous_composition__1f559059-e083-4778-88f3-cadba423ffdd.png",
    "/img/FlatulataDentata_a_woman_drosera_vase_digital_collage_art_nouve_bbdc43b8-e01c-4675-a6f6-7ef24ab89300.png",
    "/img/beartistic._close_up_face_portrait_abdtract_painting_of_a_fashi_aa22803c-ab11-41a0-8e3b-810c75029bea.png",
    "/img/cannedgoods_drosera_cryptidfashion_focus_stack_683b9450-db14-4cc9-880c-51727cafaa6e.png",
    "/img/chrisagiddings_Iron_Maiden_pin_up_drosera_mirror_shield_amazonw_b94ead38-f917-4f3b-a119-a350b1356ca5.png",
    "/img/ct_actual_Drosera_with_a_trippy_twist_incorporating_cyan_and_ma_2229ccb6-d5e6-4c18-a1f9-1b7ce7219d55.png",
    "/img/debauch._Hes_ravenous_fussy_half-human_often_dormant_and_largel_472a9f2d-332e-4413-bc83-e3af12a19e3d.png",
    "/img/gibrowalker_closeup_of_heisenberg_say_my_name_black_and_white_c_92d68937-a701-40e4-8dbb-5f72b479803b.png",
    "/img/kdartt_bulging_out_of_a_plyon_made_of_electricity_colorful_no_b_1b104f1e-2ca1-4320-ac64-7cffa42b9310.png",
    "/img/luxlab_kaleidoscopic_boom-booming_the_boopity_boop_1ecab830-c138-476f-a0e3-2938624e690f.png",
    "/img/midjourneydagalera._Temple_of_the_goddess_Prithvi_Tattva_the_Dr_4c3ed756-418a-43c8-856f-4f110c068fe4.png",
    "/img/never.mohr_The_shape_-_drosera_the_arc_-_drosera_the_hues_-_dro_f11af82f-ebd0-4636-ae09-8bc5a8318f25.png",
    "/img/notjust3smallwords_bewildered_confused_rainbow_Potoo_with_huge__59d1d3c7-b648-46e8-9f0c-0c296086ce1d.png",
    "/img/swisstrade_David_Lynch_cinematic_style_movie_still_technicolor_69a75e41-1da3-4ada-b5a5-26019c4a8e8e.png",
    "/img/swisstrade_Incluiremos_tonos_verdes_frescos_y_naturales_para_si_1cb8a5fe-82f6-484f-82a1-64eed3a7f221.png",
    "/img/swisstrade_Temple_of_the_goddess_Prithvi_Tattva_the_Drosera_pat_56dd99b7-3a56-4d29-99fd-0a2fb327e0d9.png",
    "/img/swisstrade_drosera_arboreal_ice_hotel_aurora_borealis_gorgeous__4e7a531b-a5d6-4212-8c2e-d87f4d6383d6.png",
    "/img/swisstrade_drosera_arboreal_inspired_ice_hotel_aurora_borealis__322b27a4-f983-4e90-8cad-dd15f9b05888.png",
    "/img/swisstrade_drosera_ice_hotel_aurora_borealis_gorgeous_compositi_4a624042-88be-44a8-8c33-78e895658752.png",
    "/img/swisstrade_drosera_ice_hotel_aurora_borealis_gorgeous_compositi_531cf4b4-cab2-4f21-a1a6-09d91be3393d.png",
    "/img/swisstrade_gray_space_picture_unreal_engine_5a1d99c5-e57f-497d-9454-178f8738692a.png",
    "/img/swisstrade_gray_space_picture_unreal_engine_c1960ce7-3596-43b0-9d24-faa40f932a8a.png",
    "/img/swisstrade_gray_space_picture_unreal_engine_c6599b50-d681-4088-b613-90f19202fcdb.png",
    "/img/swisstrade_neon_Prithvi_Tattva_divine_nature_in_a_droseracore_g_3f598800-4596-47ce-97e4-6b63a02d1ec6.png",
    "/img/swisstrade_two_side_pill_open_wallpaper_size_cc992f42-2452-4b17-8249-812b98097348.png",
    "/img/wisemansgame_a_beautiful_young_woman_with_Medusa_style_hair_and_703287ec-24c9-45e1-9433-c144d1a30aea.png",
    "/img/wonnetrunken_Iron_Maiden_pin_up_drosera_mirror_shield_amazonwin_733e32c4-9814-459d-8ab0-6b61c7ca0a0d.png"
];


function render() {
    const container = document.getElementById('container');
    let html = '';  // leere varriable definieren  , leerer string 

    for (let imgPath of images) {     // in der for schleife werden die bilder hinzugefügt 
        html += `<img src="${imgPath}" alt="Image" style="max-width:100%;">`;
    }

    container.innerHTML = html;   // html code zum div container hinzufügen 
}

function showModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');

    modal.style.display = "block";
    modalImg.src = imageSrc;

    const span = document.querySelector(".close");
    span.onclick = function() {
        modal.style.display = "none";
    }
}

function render() {
    const container = document.getElementById('container');
    let html = '';

    for (let imgPath of images) {
        html += `<img src="${imgPath}" alt="Image" style="max-width:100%;" onclick="showModal('${imgPath}')">`;
    }

    container.innerHTML = html;
}


