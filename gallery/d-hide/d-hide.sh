nohup sh -c 'CUDA_VISIBLE_DEVICES=1 python animate_svg_all_in_one.py --word "hide" --optimized_letter "d" \
 --caption "A child playing hide and seek peeks their head out from the side of a wall" \
 --output_folder "hide_all_1e3_1e3_2e4" \
 --use_xformer --hash --anneal --use_perceptual_loss --use_conformal_loss \
 --use_transition_loss \
 --report_to_wandb'> output.log 2>&1 &