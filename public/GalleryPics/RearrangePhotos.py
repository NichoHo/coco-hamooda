import os
import sys

def rename_files(directory=None):
    # If no directory is specified, use the current directory
    if directory is None:
        directory = os.getcwd()
    
    # Get all files in the directory (excluding subdirectories)
    files = [f for f in os.listdir(directory) 
             if os.path.isfile(os.path.join(directory, f))]
    
    # Filter out this script file to avoid renaming it
    script_name = os.path.basename(__file__)
    if script_name in files:
        files.remove(script_name)
    
    # Sort files for consistent ordering
    files.sort()
    
    # Counter for numbering
    i = 1
    
    for file in files:
        # Get file extension
        filename, extension = os.path.splitext(file)
        
        # Create new filename
        new_filename = f"Charcoal_pic_{i}{extension}"
        new_filepath = os.path.join(directory, new_filename)
        old_filepath = os.path.join(directory, file)
        
        # Rename the file
        try:
            os.rename(old_filepath, new_filepath)
            print(f"Renamed: {file} -> {new_filename}")
            i += 1
        except OSError as e:
            print(f"Error renaming {file}: {e}")
    
    print(f"\nRenaming complete! {i-1} files were renamed.")

if __name__ == "__main__":
    # Use command line argument if provided, else use current directory
    target_directory = sys.argv[1] if len(sys.argv) > 1 else None
    
    if target_directory and not os.path.isdir(target_directory):
        print(f"Error: Directory '{target_directory}' does not exist!")
        sys.exit(1)
    
    rename_files(target_directory)