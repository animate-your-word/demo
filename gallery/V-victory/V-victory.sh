nohup sh -c 'CUDA_VISIBLE_DEVICES=0 python animate_svg_all_in_one.py --word "VICTORY" --optimized_letter "V" \
 --caption "A man raises his arm and shouts in celebration of victory" \
 --output_folder "victory_all_1e3_1e3_2e4_rerun" \
 --use_xformer --hash --anneal --use_perceptual_loss --use_conformal_loss  \
 --use_transition_loss --report_to_wandb'> output.log 2>&1 &