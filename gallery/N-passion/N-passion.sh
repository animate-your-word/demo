nohup sh -c 'CUDA_VISIBLE_DEVICES=2 python animate_svg_all_in_one.py --word "PASSION" --optimized_letter "N" \
 --caption "Two people kiss each other, one holding the others chin with his hand" \
 --output_folder "passion_all_1e3_1e3_2e4_hard5.0" \
 --use_xformer --hash --anneal --use_perceptual_loss --use_conformal_loss  \
 --use_transition_loss --schedule_rate 5.0 \
 --report_to_wandb' > output.log 2>&1 &