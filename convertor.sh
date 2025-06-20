#!/bin/bash

# Process JPG files
for img in public/pozemky-new/*/*.jpg; do
    if [ -f "$img" ]; then
        echo "Processing image: $img"
        cwebp "$img" -o "${img%.jpg}.webp"
        rm "$img"
        echo "Converted $img to ${img%.jpg}.webp and removed original."
    fi
done

# Process MP4 files
for video in public/pozemky-new/*/*.mp4; do
    if [ -f "$video" ]; then
        echo "Processing video: $video"

        # Create a temporary output filename
        # We append .tmp to the original filename for the compressed version
        output_video="${video%.mp4}_compressed.mp4" # Using a different suffix for clarity, could be just .tmp

        # Compress video using FFmpeg
        # Added -y to automatically overwrite if the temporary file already exists (unlikely in this setup but good practice)
        ffmpeg -i "$video" -c:v libx264 -crf 28 -preset medium -an -y "$output_video"

        # Check if FFmpeg command was successful
        if [ $? -eq 0 ]; then
            echo "Successfully compressed $video to $output_video."
            # Remove original file
            rm "$video"
            # Rename the compressed file to the original filename
            mv "$output_video" "$video"
            echo "Replaced original $video with compressed version."
        else
            echo "Error compressing $video. Keeping original file."
            # Remove the temporary file if compression failed
            rm -f "$output_video"
        fi
    fi
done
