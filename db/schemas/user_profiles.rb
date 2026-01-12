create_table "user_profiles", force: :cascade do |t|
  t.bigint "user_id", null: false
  t.string "name", null: false
  t.timestamps null: false
end

add_index "user_profiles", ["user_id"], name: "index_user_profiles_on_user_id"
add_foreign_key "user_profiles", "users"
