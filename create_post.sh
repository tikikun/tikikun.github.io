#!/bin/bash

# Function to convert input to URL-friendly slug
slugify() {
    echo "$1" | iconv -t ascii//TRANSLIT | sed -r 's/[~\^]+//g' | sed -r 's/[^a-zA-Z0-9]+/-/g' | sed -r 's/^-+\|-+$//g' | tr A-Z a-z
}

echo "Enter post title:"
read POST_TITLE

# Convert the title to a slug
POST_SLUG=$(slugify "$POST_TITLE")

# Create the post with the slugified name
hugo new --kind post posts/$POST_SLUG/index.md

