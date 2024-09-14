function bring_back_file_from_cluster(store, key)

% Filename (to write serialize data to)
destination = strcat(key,'.mat');

% Create local file
copyFileFromStore(store, key, destination)
