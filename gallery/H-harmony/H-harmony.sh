nohup sh -c 'CUDA_VISIBLE_DEVICES=0 python animate_svg_all_in_one.py --word 'HARMONY' --optimized_letter 'H'  \
 --caption "Two men shaking hands with each other in a friendly manner" \
 --output_folder "harmony_all_1e3_1e3_2e4" \
 --use_xformer --hash --anneal --use_perceptual_loss --use_conformal_loss \
 --use_transition_loss --report_to_wandb' > output.log 2>&1 &