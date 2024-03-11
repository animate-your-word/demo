nohup sh -c 'CUDA_VISIBLE_DEVICES=4 python animate_svg_all_in_one.py --word 'GYM' --optimized_letter 'Y'  \
 --caption "A man doing exercise by lifting two dumbbells in both hands" \
 --output_folder "gym_all_1e3_1e3_2e4_rerun" \
 --use_xformer --hash --anneal --use_perceptual_loss --use_conformal_loss \
 --use_transition_loss --report_to_wandb' > output.log 2>&1 &