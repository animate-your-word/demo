nohup sh -c 'CUDA_VISIBLE_DEVICES=3 python animate_svg_all_in_one.py --word "FIRE" --optimized_letter "F" \
 --caption "Two soldiers are firing their guns, one standing and one crouching" \
 --output_folder "fire_all_1e3_1e3_2e4" \
 --use_xformer --hash --anneal --use_perceptual_loss --use_conformal_loss  \
 --use_transition_loss --report_to_wandb'> output.log 2>&1 &