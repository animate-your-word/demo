nohup sh -c 'CUDA_VISIBLE_DEVICES=5 python animate_svg_all_in_one.py --word 'DANGEROUS' --optimized_letter 'D'  \
 --caption "A dangerous monster opens its mouth, ready to swallow someone" \
 --output_folder "dangerous_all_1e3_1e3_2e4" \
 --use_xformer --hash --anneal --use_perceptual_loss --use_conformal_loss \
 --use_transition_loss --report_to_wandb' > output.log 2>&1 &