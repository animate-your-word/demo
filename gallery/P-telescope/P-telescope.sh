nohup sh -c 'CUDA_VISIBLE_DEVICES=3 python animate_svg_all_in_one.py --word 'TELESCOPE' --optimized_letter 'P'  \
 --caption "A hand holding a monocular telescope turns towards the camera" \
 --output_folder "telescope_all_1e3_1e3_2e4" \
 --use_xformer --hash --anneal --use_perceptual_loss --use_conformal_loss \
 --use_transition_loss --report_to_wandb' > output.log 2>&1 &