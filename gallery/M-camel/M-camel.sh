nohup sh -c 'CUDA_VISIBLE_DEVICES=1 python animate_svg_all_in_one.py --word "CAMEL" --optimized_letter "M" \
 --caption "A camel walks steadily across the desert" \
 --output_folder "camel_all_1e3_1e3_4e4_hard6.0" \
 --use_xformer --hash --anneal --use_perceptual_loss --use_conformal_loss  \
 --use_transition_loss --level_of_cc 2 \
 --difficulty 'hard' --schedule_rate 6.0 --transition_weight 4e4 \
 --report_to_wandb' > output.log 2>&1 &