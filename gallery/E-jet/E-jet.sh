nohup sh -c 'CUDA_VISIBLE_DEVICES=5 python animate_svg_all_in_one.py --word "JET" --optimized_letter "E" \
 --caption "Three jet planes are flying in formation side by side." \
 --output_folder "jet_all_1e3_2e3_2e4" \
 --use_xformer --hash --anneal --use_perceptual_loss --use_conformal_loss  \
 --use_transition_loss --report_to_wandb'> output.log 2>&1 &