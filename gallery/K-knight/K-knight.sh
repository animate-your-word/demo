nohup sh -c 'CUDA_VISIBLE_DEVICES=1 python animate_svg_all_in_one.py --word "KNIGHT" --optimized_letter "K" \
 --caption "A knight draws his sword, pointing it forward, ready for battle" \
 --output_folder "knight_all_1e3_2e3_2e4" \
 --use_xformer --hash --anneal --use_perceptual_loss --use_conformal_loss  \
 --use_transition_loss --report_to_wandb'> output.log 2>&1 &