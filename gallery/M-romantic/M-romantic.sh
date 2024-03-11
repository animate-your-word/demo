nohup sh -c 'CUDA_VISIBLE_DEVICES=5 python animate_svg_all_in_one.py --word "ROMANTIC" --optimized_letter "M" \
 --caption "A couple is walking hand in hand, with the girl following the boy" \
 --output_folder "romantic_all_1e3_5e3_2e4" \
 --use_xformer --hash --anneal --use_perceptual_loss --use_conformal_loss --angles_w 5e3 \
 --use_transition_loss \
 --report_to_wandb'> output.log 2>&1 &