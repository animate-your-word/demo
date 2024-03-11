nohup sh -c 'CUDA_VISIBLE_DEVICES=1 python animate_svg_all_in_one.py --word "JAZZ" --optimized_letter "J" \
 --caption "A pair of hands is playing the saxophone" \
 --output_folder "jazz_all_1e3_1e3_2e4" \
 --use_xformer --hash --anneal --use_perceptual_loss --use_conformal_loss  \
 --use_transition_loss --report_to_wandb'> output.log 2>&1 &