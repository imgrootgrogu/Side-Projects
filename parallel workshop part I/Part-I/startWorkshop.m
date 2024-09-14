% Install and setup of Parallel Computing hands-on workshop

% Copyright 2019-2021 The MathWorks Inc.

% Verify MATLAB version is R2016b(9.1) or newer
if verLessThan('matlab','9.1')
    % If older, throw an error
    error('\n%s','MATLAB must be R2016b or newer.')
end

fprintf('\nMATLAB version verified.\n\n')

% Verify Parallel Computing Toolbox license
[PASSED, emsg] = license('checkout', 'distrib_computing_toolbox');
if PASSED==false
    error('%s\n\n',emsg)
else
    fprintf('Parallel Computing Toolbox is licensed.\n\n')
end

% Verify Parallel Computing Toolbox is installed
if verLessThan('matlab','9.7')
    productName = 'distcomp';
else
    productName = 'parallel';
end
if numel(ver(productName)) ~= 1 %#ok<DCRENAME>
    error('%s\n\n','Parallel Computing Toolbox is not installed.')
else
    fprintf('Parallel Computing Toolbox is installed.\n\n')
end

% Location of the Exercises directory
% Assuming the startup script is in the same directory as the
% Exercises directory
installFrom = fileparts(mfilename('fullpath'));

% Full location of the Exercises directory
installFrom = fullfile(installFrom,'Exercises');

% Recursively add the Exercises directory to the MATLAB path
addpath(genpath(installFrom))

fprintf('Parallel Computing Workshop content successfully added to MATLAB path.\n\n')

% Re-read MATLAB cache
rehash

% Start the user in the Exercises directory
cd(installFrom)

% % Start the user in the WorkshopNavigation for instructions
% edit('WorkshopInstructions.mlx')
% 
% fprintf('Review WorkshopInstructions to get started with the workshop.\n\n')
