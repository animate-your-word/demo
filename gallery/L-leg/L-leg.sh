nohup sh -c 'CUDA_VISIBLE_DEVICES=0 python animate_svg_all_in_one.py --word "LEG" --optimized_letter "L" \
 --caption "A leg standing on the ground" \
 --output_folder "leg_all_1e3_1e3_2e4" \
 --use_xformer --hash --anneal --use_perceptual_loss --use_conformal_loss \
 --use_transition_loss --report_to_wandb'> output.log 2>&1 &