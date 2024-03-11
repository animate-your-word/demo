nohup sh -c 'CUDA_VISIBLE_DEVICES=4 python animate_svg_all_in_one.py --word 'father' --optimized_letter 'h'  \
 --caption "A tall father walks along the road, holding his little son with his hand" \
 --output_folder "father_all_1e3_1e3_2e4" \
 --use_xformer --hash --anneal --use_perceptual_loss --use_conformal_loss \
 --use_transition_loss --report_to_wandb' > output_lift.log 2>&1 &