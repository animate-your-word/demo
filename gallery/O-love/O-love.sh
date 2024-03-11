nohup sh -c 'CUDA_VISIBLE_DEVICES=5 python animate_svg_all_in_one.py --word 'LOVE' --optimized_letter 'O'  \
 --caption "A large and a small hand together make a heart shape" \
 --output_folder "love_all_1e3_1e3_4e4_hard6.0" \
 --use_xformer --hash --anneal --use_perceptual_loss --use_conformal_loss \
 --use_transition_loss --transition_weight 4e4 --difficulty 'hard' --schedule_rate 6.0 \
 --report_to_wandb' > output.log 2>&1 &