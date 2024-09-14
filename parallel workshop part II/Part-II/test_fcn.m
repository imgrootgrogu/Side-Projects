function [time, A] = test_fcn(sims)

disp('Start sim')

A = nan(sims,1);
t0 = tic;
parfor idx = 1:sims
    A(idx) = idx;
    pause(0.5)
    idx
end
time = toc(t0);

disp('Finished')

save RESULTS A
store = getCurrentFileStore;
key = 'RESULTS';
copyFileToStore(store, 'RESULTS.mat', key)

end
