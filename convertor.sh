for img in public/pozemky/*/*.jpg; do
    cwebp "$img" -o "${img%.jpg}.webp"
    rm "$img"
done