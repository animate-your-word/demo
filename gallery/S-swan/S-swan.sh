nohup sh -c 'CUDA_VISIBLE_DEVICES=3 python animate_svg_all_in_one.py --word 'SWAN' --optimized_letter 'S'  \
 --caption "A fat swan is swimming elegantly and stretching its neck on the water" \
 --output_folder "swan_all_1e3_1e3_2e4" \
 --use_xformer --hash --anneal --use_perceptual_loss --use_conformal_loss \
 --use_transition_loss --report_to_wandb' > output.log 2>&1 &