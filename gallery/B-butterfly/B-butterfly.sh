nohup sh -c 'CUDA_VISIBLE_DEVICES=1 python animate_svg_all_in_one.py --word "BUTTERFLY" --optimized_letter "B" \
 --caption "A butterfly is flying sideways and waves its two wings" \
 --output_folder "butterfly_all_1e3_2e2_2e4" \
 --local_translation_weight 1.5 --use_xformer --hash --anneal --use_perceptual_loss \
 --use_conformal_loss --angles_w 2e2  --schedule_rate 5.0 --no_decay \
 --use_transition_loss --report_to_wandb' > output.log 2>&1 &